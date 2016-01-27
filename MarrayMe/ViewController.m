//
//  ViewController.m
//  MarrayMe
//
//  Created by 崇庆旭 on 16/1/26.
//  Copyright © 2016年 崇庆旭. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@property (nonatomic,strong,readonly) UIImage *image;

@end

@implementation ViewController

@synthesize image;

- (void)setImage:(UIImage *)image {
    
}

- (UIImage *)image {
    return [UIImage new];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
