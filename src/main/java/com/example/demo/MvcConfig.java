package com.example.demo;

import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class MvcConfig implements WebMvcConfigurer{
    public void addViewControllers(ViewControllerRegistry registry){
        registry.addViewController("/").setViewName("home");
        registry.addViewController("/rejestracja").setViewName("rejestracja");
        registry.addViewController("/article").setViewName("artykul");
        registry.addViewController("/createArticle").setViewName("utworzartykul");
        registry.addViewController("/profile").setViewName("profil");
        registry.addViewController("/logowanie").setViewName("logowanie");
    }
}
