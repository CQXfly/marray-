//
//  QXCuteView.swift
//  树叶进度效果
//
//  Created by 崇庆旭 on 16/2/1.
//  Copyright © 2016年 Tomy. All rights reserved.
//


/**

http://kittenyang.com/content/images/2015/Mar/Screen-Shot-2015-03-03-at-14-25-22.png

*/
import UIKit

public class QXCuteView:UIView  {
    var cutePath:UIBezierPath?
    var fillColorForCute:UIColor?
    var animator:UIDynamicAnimator?
    var snap:UISnapBehavior?
    
    var backView:UIView?
    var r1:CGFloat?
    var r2:CGFloat?
    var x1:CGFloat?
    var x2:CGFloat?
    var y1:CGFloat?
    var y2:CGFloat?
    var centerDistance:CGFloat?
    var cosDigree:CGFloat?
    var sinDigree:CGFloat?
    
    var pointA:CGPoint?
    var pointB:CGPoint?
    var pointC:CGPoint?
    var pointD:CGPoint?
    var pointO:CGPoint?
    var pointP:CGPoint?
    
    var oldBackViewFrame:CGRect?
    var initialPoint:CGPoint?
    var oldBackViewCenter:CGPoint?
    var shapeLayer:CAShapeLayer?
    
    /**
    *  父视图
    */
    public var containerView:UIView?
    
    //气泡上显示数字的label
    public var bubbleLabel:UILabel?
    
    //气泡的直径
    var bubbleWidth:CGFloat = 25.0
    
    //气泡粘性系数，越大可以拉得越长
    var viscosity:CGFloat = 30.0
    
    //气泡颜色
    public var bubbleColor:UIColor?
    
    //需要隐藏气泡时候可以使用这个属性：self.frontView.hidden = YES;
    public var frontView:UIView?
    
    public init(point:CGPoint,superView view:UIView) {
        super.init(frame:CGRect(x: point.x, y: point.y, width: bubbleWidth, height: bubbleWidth))
        
        initialPoint = point
        containerView = view
        containerView?.addSubview(self)
        
        
    }
    
   public override init(frame: CGRect) {
        super.init(frame: frame)
    
        prepareUI()
    }

   required public init?(coder aDecoder: NSCoder) {
       fatalError("init(coder:) has not been implemented")
   }
    
    public func prepareUI() {
        
        shapeLayer = CAShapeLayer()
        backgroundColor = UIColor.clearColor()
        frontView = UIView(frame: CGRect(x: initialPoint!.x, y: initialPoint!.y, width: bubbleWidth, height: bubbleWidth))
        r2 = frontView!.bounds.size.width / 2
        frontView!.layer.cornerRadius = r2!
        frontView!.backgroundColor = bubbleColor!
        
        backView = UIView(frame: frontView!.frame)
        r1 = backView!.bounds.width / 2
        backView?.layer.cornerRadius = r1!
        backView?.backgroundColor = bubbleColor!
        
        bubbleLabel = UILabel()
        bubbleLabel?.frame = CGRect(x: 0, y: 0, width: frontView!.bounds.size.width, height: frontView!.bounds.size.height)
        bubbleLabel?.textColor = UIColor.whiteColor()
        bubbleLabel?.textAlignment = .Center
        
        frontView?.addSubview(bubbleLabel!)
        
        containerView?.addSubview(frontView!)
        containerView?.addSubview(backView!)
        
        x1 = backView!.center.x
        y1 = backView!.center.y
        
        x2 = frontView!.center.x
        y2 = frontView!.center.y
        
        pointA = CGPoint(x: x1! - r1! ,y: y1!)
        pointB = CGPoint(x: x1! + r1!, y: y1!)
        pointD = CGPoint(x: x2! - r2!, y: y2!)
        pointC = CGPoint(x: x2! + r2!, y: y2!)
        pointO = CGPoint(x: x1! - r1!, y: y1!)
        pointP = CGPoint(x: x2! - r2!, y: y2!)
        
        oldBackViewFrame = backView!.frame
        oldBackViewCenter = backView!.center
        
        backView?.hidden = true
        addAnimationLikeGameCenterBubble()
        
        let pan = UIPanGestureRecognizer(target: self, action: "handleDragGesture:")
        frontView?.addGestureRecognizer(pan)
        
    }
    
  
    
    private func disPlayLinkAction() {
        x1 = backView!.center.x
        y1 = backView!.center.y
        
        x2 = frontView!.center.x
        y2 = frontView!.center.y
        
        let caculteSqrX = Float((x2! - x1!)*(x2! - x1!))
        let caculteSqrY = Float((y2! - y1!) * (y2! - y1!))
        centerDistance = CGFloat( sqrtf( caculteSqrX + caculteSqrY))
        
        if centerDistance == 0 {
            cosDigree = 1
            sinDigree = 0
        } else {
            cosDigree = (y2! - y1!) / centerDistance!
            sinDigree = (x2! - x1!) / centerDistance!
        }
        
        r1 = oldBackViewFrame!.size.width / 2 - centerDistance!/viscosity
        
        pointA = CGPoint(x: x1! - r1! * cosDigree! , y: y1! + r1! * sinDigree!)
        pointB = CGPoint(x: x1! + r1! * cosDigree! , y: y1! - r1! * sinDigree!)
        pointD = CGPoint(x: x2! - r2! * cosDigree! , y: y2! + r2! * sinDigree!)
        pointC = CGPoint(x: x2! + r2! * cosDigree! , y: y2! - r2! * sinDigree!)
        pointO = CGPoint(x: pointA!.x + (centerDistance! / 2) * sinDigree!, y: pointA!.y + (centerDistance! / 2) * cosDigree!)
        pointP = CGPoint(x: pointB!.x + (centerDistance! / 2) * sinDigree!, y: pointB!.y + (centerDistance! / 2) * cosDigree!)
        
        
        drawRect()
        
    }
    
    private func drawRect () {
        backView?.center = oldBackViewCenter!
        backView?.bounds = CGRect(x: 0, y: 0, width: r1! * 2, height: r1! * 2)
        backView?.layer.cornerRadius = r1!
        
        cutePath = UIBezierPath()
        cutePath!.moveToPoint(pointA!)
        cutePath!.addQuadCurveToPoint(pointD!, controlPoint: pointO!)
        cutePath!.addLineToPoint(pointC!)
        cutePath!.addQuadCurveToPoint(pointB!, controlPoint: pointP!)
        cutePath!.moveToPoint(pointA!)
        
        if backView?.hidden == false {
            shapeLayer?.path = cutePath!.CGPath
            shapeLayer?.fillColor = fillColorForCute?.CGColor
//            shapeLayer?.fillColor = UIColor.redColor().CGColor
            containerView!.layer.insertSublayer(shapeLayer!, below: frontView?.layer)
        }
    
    }
    
    @objc private func handleDragGesture(sender:UIPanGestureRecognizer) {
        let dragPoint = sender.locationInView(containerView)
        
        if sender.state == .Began {
            backView?.hidden = false
            fillColorForCute = bubbleColor
            removeAniamationLikeGameCenterBubble()
        } else if sender.state == .Changed {
            frontView?.center = dragPoint
            if(r1 <= 6) {
                fillColorForCute = UIColor.clearColor()
                backView?.hidden = true
                shapeLayer?.removeFromSuperlayer()
            }
            disPlayLinkAction()
        } else if sender.state == .Ended {
            
            panAnimation()
            
        } else if sender.state == .Cancelled {
            
            panAnimation()
            
        } else if sender.state == .Failed {
            
            panAnimation()
            
        }
        
        
        
    }
    
    private func panAnimation(){
        backView?.hidden = true
        fillColorForCute = UIColor.clearColor()
        shapeLayer?.removeFromSuperlayer()
        
        
        UIView.animateWithDuration(0.5, delay: 0.0, usingSpringWithDamping: 0.4, initialSpringVelocity: 0.0, options: UIViewAnimationOptions.CurveEaseInOut, animations: { () -> Void in
            
            self.frontView?.center = self.oldBackViewCenter!
            
            }, completion: { (finished) -> Void in
                
                if finished {
                    self.addAnimationLikeGameCenterBubble()
                }
        })

    }
    
    private func addAnimationLikeGameCenterBubble() {
        
        let pathAnimation = CAKeyframeAnimation(keyPath: "position")
        pathAnimation.calculationMode = kCAAnimationPaced
        pathAnimation.fillMode = kCAFillModeForwards
        pathAnimation.removedOnCompletion = false
        pathAnimation.repeatCount = MAXFLOAT
        pathAnimation.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionLinear)
        pathAnimation.duration = 5.0
        
        let curvedPath = CGPathCreateMutable()
        let circleContainer = CGRectInset(frontView!.frame, frontView!.bounds.size.width / 2 - 3, frontView!.bounds.size.width / 2 - 3)
        CGPathAddEllipseInRect(curvedPath, nil,circleContainer)
        
        pathAnimation.path = curvedPath
        
        frontView?.layer .addAnimation(pathAnimation, forKey: "myCircleAnimation")
        
        let scaleX = CAKeyframeAnimation(keyPath: "transform.scale.x")
        scaleX.duration = 1
        scaleX.values = [1.0,1.1,1.0]
        scaleX.keyTimes = [0.0,0.5,1.0]
        scaleX.repeatCount = MAXFLOAT
        scaleX.autoreverses = true
        scaleX.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionEaseInEaseOut)
        frontView?.layer.addAnimation(scaleX, forKey: "scaleXAnimation")
        
        let scaleY = CAKeyframeAnimation(keyPath: "transform.scale.y")
        scaleY.duration = 1.5
        scaleY.values = [1.0,1.1,1.0]
        scaleY.keyTimes = [0.0,0.5,1.0]
        scaleY.repeatCount = MAXFLOAT
        scaleY.autoreverses = true
        scaleY.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionEaseInEaseOut)
        frontView?.layer.addAnimation(scaleY, forKey: "scaleYAnimation")
        
    }
    
    private func removeAniamationLikeGameCenterBubble() {
        frontView?.layer.removeAllAnimations()
    }
  
    
}