//
//  KVOViewController.m
//  MarrayMe
//
//  Created by 崇庆旭 on 16/1/29.
//  Copyright © 2016年 崇庆旭. All rights reserved.
//

#import "KVOViewController.h"
#import "TestModel.h"
#import <Masonry.h>
#import <FBKVOController.h>

@interface KVOViewController    () <UITextFieldDelegate>

@property (nonatomic,strong) TestModel *model;

@property (nonatomic,strong) UITextField *textfield;


@end

@implementation KVOViewController


- (void)viewDidLoad {
    
    self.title = @"KVO VC";
    
    self.model = [[TestModel alloc] init];
    self.model.name = @"xiaohuang";
    FBKVOController *vc = [FBKVOController controllerWithObserver:self];
    self.KVOController = vc;
    
    [self.KVOController observe:self.model keyPaths:@[@"name"] options:  NSKeyValueObservingOptionNew block:^(id observer, id object, NSDictionary *change) {
       
        NSLog(@"name = %@ , %@",observer,object);
        
    }];
    
    self.textfield.borderStyle = UITextBorderStyleRoundedRect;
    self.textfield.placeholder = @"plz input your name";
    
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

@end
