//
//  KVOViewController.m
//  MarrayMe
//
//  Created by 崇庆旭 on 16/1/29.
//  Copyright © 2016年 崇庆旭. All rights reserved.
//

#import "KVOViewController.h"
#import "TestModel.h"
#import "MarrayMe-Swift.h"
#import <Masonry.h>
#import <FBKVOController.h>

/**
 使用masonry 非常重要的一点就是要先加父控件上 不然约束的时候不能找到层级关系
 */

@interface KVOViewController    () <UITextFieldDelegate> {
    
    CGFloat _rate;
}

@property (nonatomic,strong) TestModel *model;

@property (nonatomic,strong) UITextField *textfield;

@property (nonatomic,strong) LeafProgress *progress;

@property (nonatomic,strong) QXCuteView *cuteView;


@end

@implementation KVOViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.title = @"KVO VC";
    
    self.view.backgroundColor = [UIColor orangeColor];
    self.model = [[TestModel alloc] init];
    self.model.name = @"xiaohuang";
    FBKVOController *vc = [FBKVOController controllerWithObserver:self];
    self.KVOController = vc;
    
    [self.KVOController observe:self.model keyPaths:@[@"name"] options:  NSKeyValueObservingOptionNew block:^(id observer, id object, NSDictionary *change) {
       
        NSLog(@"name = %@ , %@",observer,object);
        
    }];
    
    self.textfield.borderStyle = UITextBorderStyleRoundedRect;
    self.textfield.placeholder = @"plz input your name";
    
    [self.progress startLoading];
    [self.cuteView prepareUI];
    
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    self.model.name = @"皇甫大柱";
    

}

- (BOOL)textFieldShouldReturn:(UITextField *)textField {
    NSString *str = textField.text;
    
    self.model.name = str ;
    
    self.model.sex = @"sex";
    return YES;
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event{
    _rate += 0.01;
    
    [_progress setProgress:_rate];
    
   
    if (_rate >= 0.999) {
        _rate = 0 ;
        [_progress stopLoading];
    }
}


#pragma mark lazy
- (UITextField *)textfield {
    if (!_textfield) {
        
        _textfield = [[UITextField alloc] init];
        _textfield.delegate = self;
        [self.view addSubview:_textfield];
        [_textfield mas_makeConstraints:^(MASConstraintMaker *make) {
            
            make.top.mas_equalTo(100);
            make.left.mas_equalTo(100);
            make.width.mas_equalTo(100);
            make.height.mas_equalTo(44);
            
        }];
        
       
    }
     return _textfield;
}

- (LeafProgress *)progress {
    if (!_progress) {
        _progress = [[LeafProgress alloc] initWithFrame:CGRectMake(35, 200, 248, 35)];
//        _progress = [[LeafProgress alloc] initWithFrame:CGRectZero];
        [self.view addSubview:_progress];
        
//        [_progress mas_makeConstraints:^(MASConstraintMaker *make) {
//           
//            make.top.equalTo(self.textfield.mas_bottom).offset(20);
//            make.width.equalTo(@248);
//            make.height.equalTo(@35);
//            make.right.equalTo(@30);
//        }];
        
    }
    return _progress;
}

- (QXCuteView *)cuteView {
    if (_cuteView == nil) {
        _cuteView = [[QXCuteView alloc]initWithPoint:CGPointMake(25, [UIScreen mainScreen].bounds.size.height - 70) superView:self.view];
        
        _cuteView.bubbleColor = [UIColor colorWithRed:0 green:0.722 blue:1 alpha:1];
        

    }
    
    return _cuteView;
}


@end
