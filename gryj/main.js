//j키
if(App.addOnKeyDown==74){
    player.spotlight(true)
    // 플레이어에게 지정된 위치에 해당 text를 1초간 표시
    player.showCenterLabel(1, "스팟라이트를 키셨습니다.") 
    // 플레이어를 해당 구역으로 소환
    //player.spawnAtLocation()
}
else{
    // 플레이어에게 지정된 위치에 해당 text를 1초간 표시
    player.showCenterLabel(1, "스팟라이트를 끄셨습니다.") 
}

// 플레이어 필드값을 수정한 후 업데이트
player.sendUpdated()

// 플레이어 스토리지값을 저장
player.save()