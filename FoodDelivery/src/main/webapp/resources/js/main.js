/* img slider*/

$(document).ready(function(){
  $('.imgslider').slick({
	  infinite: true , 
	  /* 맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 */        
	  slidesToShow: 1, 
	  /* 화면에 보여질 이미지 갯수*/        
	  slidesToScroll: 1,  
	  /* 스크롤시 이동할 이미지 갯수 */         
	  autoplay: true, 
	  /* 자동으로 다음이미지 보여주기 */         
	  arrows: true, 
	  nextArrow: '<i class="fas fa-angle-right"></i>',
	  prevArrow: '<i class="fas fa-angle-left"></i>',
	  /* 화살표 */        
	  autoplaySpeed:3000,
	  /* 다음이미지로 넘어갈 시간 */         
	  speed:1000 ,
	  /* 다음이미지로 넘겨질때 걸리는 시간 */         
	  pauseOnHover:true, 
	  /* 마우스 호버시 슬라이드 이동 멈춤 */
	  responsive: [ 
		  { 
			  /* 반응형웹*/ 
			  breakpoint: 960, 
			  /* 기준화면사이즈 */ 
			  settings: {slidesToShow:2 } 
		  	  /* 사이즈에 적용될 설정 */ 
		  }, 
		  { 
			  /* 반응형웹*/ 
			  breakpoint: 768, 
			  /* 기준화면사이즈 */
			  settings: {slidesToShow:1 } 
		      /* 사이즈에 적용될 설정 */ 
		  }
	 ]
  });
});