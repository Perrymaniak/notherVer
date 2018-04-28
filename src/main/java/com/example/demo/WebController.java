package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@EnableWebMvc
public class WebController {

    @RequestMapping(value="/")
    public String home(){
        return "/layouts/index";
    }

    @RequestMapping(value="/logowanie")
    public String login(){
        return "/layouts/logowanie";
    }

    @RequestMapping(value="/rejestracja")
    public String register(){
        return "/layouts/rejestracja";
    }

    @RequestMapping(value="/artykul")
    public String article(){
        return "/layouts/article";
    }

    @RequestMapping(value="/utworzartykul")
    public String createArticle(){
        return "/layouts/createArticle";
    }

    @RequestMapping(value="/profil")
    public String profile(){
        return "/layouts/profile";
    }
}
