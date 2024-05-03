//object
const player = {
    name:"nico",
    point:10,
    fat:true,
};

console.log(player);

//존재하지 않는 것도 넣을 수 있다.
player.lastName = "potato";

//업데이트
player.point = 10;
player.point = player.point + 15;

console.log(player);