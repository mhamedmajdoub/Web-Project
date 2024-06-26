package com.webproject.webproject.repository;

import com.webproject.webproject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);
}
