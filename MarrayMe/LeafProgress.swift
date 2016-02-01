//
//  LeafProgress.swift
//  树叶进度效果
//
//  Created by 崇庆旭 on 16/2/1.
//  Copyright © 2016年 Tomy. All rights reserved.
//

import UIKit;

public class LeafProgress: UIView {
    
    var flowerView          :UIImageView?
    
    var progressImageView   : UIImageView?
    
    var progressBGImageView : UIImageView?
    
    var textLabel           : UILabel?
    
    override init(frame: CGRect) {
       super.init(frame: frame)
        prepareUI()
        
    }
    
    func progressView() {
        
        prepareUI()
    }
//
    

    required public init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    
    private func prepareUI(){
        let bgImageView = UIImageView(frame: CGRect(x: 0, y: 0, width: frame.size.width, height: frame.size.height))
        bgImageView.image = UIImage(named: "bg")?.stretchableImageWithLeftCapWidth(124 / 2, topCapHeight: 35 / 2 )
        self.addSubview(bgImageView)
        
        
        flowerView = UIImageView(frame: CGRect(x: frame.size.width - 32, y: 2, width: 30, height: 30))
        flowerView?.image = UIImage(named: "flower")?.stretchableImageWithLeftCapWidth(126/2, topCapHeight: 119/2)
        addSubview(flowerView!)

        progressBGImageView = UIImageView(frame: CGRect(x: 4, y: 6.2, width: frame.size.width - 38, height: 24))
        progressBGImageView?.contentMode = .Left
        progressBGImageView?.backgroundColor = UIColor.clearColor()
        progressBGImageView?.clipsToBounds = true
        addSubview(progressBGImageView!)

        
        progressImageView = UIImageView(frame: CGRect(x: 4, y: 6.2, width: 0, height: 24))
        progressImageView?.image = UIImage(named: "progress")?.stretchableImageWithLeftCapWidth(86/2, topCapHeight: 24/2)
        progressImageView?.contentMode = .Left
        progressImageView?.clipsToBounds = true
        addSubview(progressImageView!)

        
        textLabel = UILabel(frame: flowerView!.frame)
        textLabel?.text = "100/%"
        textLabel?.textColor = UIColor.whiteColor()
        textLabel?.hidden = true
        textLabel?.font = UIFont.boldSystemFontOfSize(11)
        addSubview(textLabel!)

    }
    
    
    public func startLoading () {
        let rotateAnimation = CABasicAnimation(keyPath: "transform")
        rotateAnimation.fromValue = NSValue(CATransform3D: CATransform3DIdentity)
        rotateAnimation.toValue = NSValue(CATransform3D:CATransform3DRotate((flowerView?.layer.transform)!, CGFloat(M_PI), 0, 0, 1))
        rotateAnimation.cumulative = true
        rotateAnimation.duration = 0.5
        rotateAnimation.repeatCount = MAXFLOAT
        
        flowerView?.layer .addAnimation(rotateAnimation, forKey: "flowerAnimation")
        
    }
        
    
    public func stopLoading() {
        flowerView?.layer .removeAllAnimations()
        
        let scaleAnimation = CABasicAnimation(keyPath: "transform.scale")
        scaleAnimation.fromValue = 1
        scaleAnimation.toValue = 0
        scaleAnimation.duration = 0.5
        scaleAnimation.removedOnCompletion = false
        scaleAnimation.fillMode = kCAFillModeForwards
        flowerView?.layer.addAnimation(scaleAnimation, forKey: nil)
        
        textLabel?.hidden = false
        scaleAnimation.fromValue = 0
        scaleAnimation.toValue = 1
        textLabel?.layer.addAnimation(scaleAnimation, forKey: nil)
        
    }
   

    
    public func setProgress(rate:CGFloat) {
        var frame = progressImageView!.frame
        frame.size.width = progressBGImageView!.frame.size.width * rate
        progressImageView?.frame = frame
        
        let leafLayer = CALayer()
        leafLayer.contents = UIImage(named: "leaf")?.CGImage
        leafLayer.bounds = CGRect(x: 0, y: 0, width: 10, height: 10)
        leafLayer.position = CGPoint(x: progressBGImageView!.frame.origin.x + progressBGImageView!.frame.size.width, y: 8)
        progressBGImageView?.layer .addSublayer(leafLayer)
        
        //开始动画
        let keyAnimation = CAKeyframeAnimation(keyPath: "position")
        let arcH = arc4random() % (UInt32)(progressBGImageView!.frame.size.height)
        let bgImagW = progressBGImageView!.frame.size.width
        let bgImagX = progressBGImageView!.frame.origin.x
        let bgImagY = progressBGImageView!.frame.origin.y
        let p1 = NSValue(CGPoint: leafLayer.position)
        let p2 = NSValue(CGPoint: CGPoint(x: bgImagX + bgImagW * 3/4 + CGFloat(arcH), y: bgImagY + CGFloat(arcH)))
        let p3 =  NSValue(CGPoint: CGPoint(x: bgImagX + bgImagW * 2/4 + CGFloat(arcH), y: bgImagY + CGFloat(arcH)))
        let p4 =  NSValue(CGPoint: CGPoint(x: bgImagX + bgImagW * 1/4 + CGFloat(arcH), y: bgImagY + CGFloat(arcH)))
        let p5 =  NSValue(CGPoint: CGPoint(x: bgImagX + 5, y: bgImagY + CGFloat(arcH)))
        
        keyAnimation.values = [p1,p2,p3,p4,p5]
        
        let roteAnimation = CABasicAnimation(keyPath: "transform.rotation.z")
        roteAnimation.fromValue = 0
        roteAnimation.toValue = M_PI / 18.0 *  Double((arc4random() % 6))
        
        let group = CAAnimationGroup()
        group.animations = [roteAnimation,keyAnimation]
        group.duration = 8
        group.delegate = self
        group.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionDefault)
        group.setValue(leafLayer, forKey: "leafLayer")
        
        leafLayer.addAnimation(group, forKey: nil)
        
        
    }
    
    
    public override func animationDidStop(anim: CAAnimation, finished flag: Bool) {
        let layer = anim.valueForKey("leafLayer")
        layer?.removeFromSuperlayer()
    }

}
