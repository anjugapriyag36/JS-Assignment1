let users = [user1, user2, mod, admin];
// // let courses = ['Js', 'python', 'C', 'C++'];

users.forEach(element => {
    console.log(element);
});
User.greet();
admin.addCourse(user1, 'Js');
admin.addCourse(user1, 'python');
admin.removeCourse(user1, 'python');
// user1.login()
// user1.addCoins();
// user1.addCoins();
// user1.addCoins();
// user1.logout()
user1.login().addCoins().addCoins().getDetails().logout();
console.log(users);
