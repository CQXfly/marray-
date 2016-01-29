defineClass("JSPatchViewController",{

  viewDidLoad: function() {
     self.super().viewDidLoad();
            
            require('UIView, UIColor')
            var view = UIView.alloc().initWithFrame({x:20,y:64,width:100,height:100})
            var red = UIColor.redColor()
            view.setBackgroundColor(red)
            
            self.view().addSubview(view)
            
            console.log(view.backgroundColor());
            
  }
            
            
    
})
