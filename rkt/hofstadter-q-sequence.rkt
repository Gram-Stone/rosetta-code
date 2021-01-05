#lang racket/base
(define (hofstadter-q n)
  (+ (hofstadter-q (- n (hofstadter-q (- n 1))))
     (hofstadter-q (- n (hofstadter-q (- n 2))))))