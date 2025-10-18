package com.wecp.progressive.service.impl;

import com.wecp.progressive.entity.User;
import com.wecp.progressive.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UserLoginServiceImpl implements UserDetailsService 
{
    //@Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserLoginServiceImpl(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() 
    {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Integer userId) 
    {
        return userRepository.findById(userId);
    }

    public User createUser(User user) 
    {   
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User updateUser(User user) 
    {
        Optional<User> userop = userRepository.findById(user.getUserId());

        if(userop.isPresent())
        {
            User userObj = userop.get();
            userObj.setFullName(user.getFullName());
            userObj.setUsername(user.getUsername());
            userObj.setPassword(user.getPassword());
            userObj.setEmail(user.getEmail());
            userObj.setRole(user.getRole());

            return userRepository.save(userObj);
        }

        return (null);
    }

    public void deleteUser(Integer id) 
    {
        userRepository.deleteById(id);
    }

    public User getUserByUsername(String username) 
    {
        return userRepository.findByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) 
    {
        if(userRepository.findByUsername(username) == null)
        {
            throw new RuntimeException("User not found");
        }

        User user = userRepository.findByUsername(username);

        UserDetails userDetailsObj = new org.springframework.security.core.userdetails.User(
            user.getUsername(), user.getPassword(),
            Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + user.getRole()))
        );

        return userDetailsObj;
    }
}