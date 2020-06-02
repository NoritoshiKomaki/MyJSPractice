'use strict';

{
  class Profile {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    show() {
      console.log(`私の名前は${this.name}です。年齢は${this.age}歳です`);
    }
  }

  class Profile2 extends Profile {
    constructor(name, age, year) {
      super(name, age)
      this.year = year
    }

    show() {
      super.show();
      console.log(`${this.year}年前は${this.age - this.year}歳でした。`)
    }
  }

  const profiles = [
    new Profile('小牧', 31),
    new Profile('丸山', 29),
    new Profile2('丸山', 29, 5),
  ]

  profiles[0].show();
  profiles[1].show();
  profiles[2].show();
}