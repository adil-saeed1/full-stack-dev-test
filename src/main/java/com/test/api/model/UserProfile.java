package com.test.api.model;

public class UserProfile {
    private  String userName;
    private String role;

    public UserProfile() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        userName = userName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        role = role;
    }

    @Override
    public String toString() {
        return "UserProfile{" +
                "userName='" + userName + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
