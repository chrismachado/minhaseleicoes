package com.br.minhaseleicoes.minhaseleicoes.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer{

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        registry
            .addMapping("/api/v1/resultados")
            .allowedOrigins("http://localhost:8081")
            .allowedMethods("GET")
            .allowedHeaders("*");

        registry
            .addMapping("/api/v1/urnas")
            .allowedOrigins("http://localhost:8081")
            .allowedMethods("GET")
            .allowedHeaders("*");

        registry
            .addMapping("/api/v1/candidatos/**")
            .allowedOrigins("http://localhost:8081")
            .allowedMethods("GET")
            .allowedHeaders("*");

        registry
            .addMapping("/api/v1/cargos/**")
            .allowedOrigins("http://localhost:8081")
            .allowedMethods("GET")
            .allowedHeaders("*");
    }

}
