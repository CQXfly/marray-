//
//  File.swift
//  MarrayMe
//
//  Created by 崇庆旭 on 16/1/29.
//  Copyright © 2016年 崇庆旭. All rights reserved.
//

import Foundation

/**
 
 jspatch -> 入坑指南 
 
 defineClass(引用的类父类以及继承关系或者代理，实例方法，类方法)
           举例  defineClass("UIVIEW",{},{})
 
 获取属性 如 获取self.view 
           使用self.view() get属性 加括号 （源码还没有细看）
 设置属性set 如view.backgroundColor
            使用view.setBackgroundColor() 括号里设置属性值 uicolor.redcolor()
 
 方法名    动态调用oc 所以遵从oc 运行时的方法名 
 */