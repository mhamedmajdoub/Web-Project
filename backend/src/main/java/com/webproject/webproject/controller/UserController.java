package com.webproject.webproject.controller;

import com.webproject.webproject.dto.ReqResponse;
import com.webproject.webproject.service.UsersManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UsersManagementService usersManagementService;

    @PostMapping("/register")
    public ResponseEntity<ReqResponse> register(@RequestBody ReqResponse reg) {
        return ResponseEntity.ok(usersManagementService.register(reg));
    }

    @PostMapping("/login")
    public ResponseEntity<ReqResponse> login(@RequestBody ReqResponse req) {
        return ResponseEntity.ok(usersManagementService.login(req));
    }
}
