// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract userprofile {
    struct User {
        string name;
        string image;
        string about;
        string mail;
        string twitter;
        string github;
    }

    mapping(address => User) public users;

    function updateUserProfile(
        string memory _name,
        string memory _about,
        string memory _image,
        string memory _mail,
        string memory _twitter,
        string memory _github
    ) public {
        User storage user = users[msg.sender];
        user.name = _name;
        user.about = _about;
        user.image = _image;
        user.mail = _mail;
        user.twitter = _twitter;
        user.github = _github;
    }
    function getUserProfile(address _userAddress) public view returns (string memory, string memory, string memory, string memory, string memory, string memory) {
    User storage user = users[_userAddress];
    return (user.name, user.image, user.about, user.mail, user.twitter, user.github);
}

}