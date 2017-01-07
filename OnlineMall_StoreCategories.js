/* 

    <table class="table">
			<tbody>
				<tr>
					<td> 
					<input type="image" id="imgFlipkart" class="
ClickableImg"  src="https://bmsonlinemall.files.wordpress.com/2016/11/flipkart_new_icon.png?w=106&#038;h=106"  Onclick="ImageClicked(this, aflFlipKart)" alt="Flipkart Image Not Displayed, No Worries Click Here" /> 					
					</td>
					<td>
					<input type="image" id="imgAmazon" class="
ClickableImg"  src="https://bmsonlinemall.files.wordpress.com/2016/11/amazon-black-icon-16.png?w=106&#038;h=106" Onclick="ImageClicked(this,aflAmazon )" alt="Amazon Image Not Displayed, No Worries Click Here"/> 
					</td>						
					<td>
          </td> 
          <td>
					<input type="image" id="imgShopClues" class="
ClickableImg" src="https://bmsonlinemall.files.wordpress.com/2016/11/shopclues_1.jpg?w=106&#038;h=106" Onclick="ImageClicked(this,aflShopClues )" alt="ShopClues Image Not Displayed, No Worries Click Here"/> 
					</td>						
<!--       </tr>
        <tr> -->
          <td>
					<input type="image" id="imgSnapdeal" class="
ClickableImg" src="https://bmsonlinemall.files.wordpress.com/2016/11/snapdeal_1.png?w=106&#038;h=146" Onclick="ImageClicked(this,aflSnapdeal )" alt="Snapdeal Image Not Displayed, No Worries Click Here"/> 
					</td>						
        <td>
					<input type="image" id="imgeBay" class="
ClickableImg" src="https://bmsonlinemall.files.wordpress.com/2016/11/ebay_1.gif?w=106&#038;h=146" Onclick="ImageClicked(this,afleBay )" alt="eBay Image Not Displayed, No Worries Click Here"/> 
					</td>		
          <td>					</td>		
          <td>
					<input type="image" id="imgrdiff" class="
ClickableImg" src="https://bmsonlinemall.files.wordpress.com/2016/11/rediff_1.png?w=106&#038;h=146" Onclick="ImageClicked(this,aflRediff )" alt="Rediff Image Not Displayed, No Worries Click Here"/> 
					</td>		
        </tr>

        <tr>
          <td>
					<input type="image" id="imgHS18" class="
ClickableImg" src="https://bmsonlinemall.files.wordpress.com/2016/11/homeshop18_1.jpg?w=106&#038;h=146" Onclick="ImageClicked(this,aflHS18 )" alt="HS18 Image Not Displayed, No Worries Click Here"/> 
					</td>						
        <td>
					<input type="image" id="imgeBay" class="
ClickableImg" src="https://bmsonlinemall.files.wordpress.com/2016/11/ebay_1.gif?w=106&#038;h=146" Onclick="ImageClicked(this,afleBay )" alt="eBay Image Not Displayed, No Worries Click Here"/> 
					</td>		
          <td>					</td>		
          <td>
					<input type="image" id="imgrdiff" class="
ClickableImg" src="https://bmsonlinemall.files.wordpress.com/2016/11/rediff_1.png?w=106&#038;h=146" Onclick="ImageClicked(this,aflRediff )" alt="Rediff Image Not Displayed, No Worries Click Here"/> 
					</td>		
        </tr>
      
      </tbody>
		</table>

*/
//Constants declaration
//aflFlipKart='https://www.flipkart.com/';
aflFlipKart='http://amzn.to/2gDk787';
aflAmazon='http://amzn.to/2gDk787';
aflShopClues='http://www.shopclues.com/icon-backpack-2.html';
aflSnapdeal='https://www.snapdeal.com/';
afleBay='http://www.ebay.in/rpp/deals';
aflRediff='http://shopping.rediff.com/';
aflHS18='http://offers.homeshop18.com/';
aflInfiB='http://www.infibeam.com/offers';
aflShimply='https://www.shimply.com/';

aflMajBrn='http://www.majorbrands.in/';
aflYepMe='http://www.yepme.com/';
aflMyntra='http://www.myntra.com/';
aflJabong='http://www.jabong.com/';
aflLimeRoad='http://www.limeroad.com/';
aflPayTMWedding='https://paytm.com/offer/wedding-guest-dresses-gifts/';

aflIndTimes='';

aflPayTMRech='https://paytm.com/shop';
aflFreecharge='https://www.freecharge.in/';
aflRechargeit='http://m.rechargeitnow.com/';

aflFirstCry='http://www.firstcry.com/#';
aflLittleShop='http://littleshop.in/';
aflHopScotch='https://www.hopscotch.in/';
aflMyBabycart='http://mybabycart.com/';
aflThepipal='http://www.smartbaby.in/';
aflSmartBaby='http://www.smartbaby.in/';

aflBigbasket='http://www.bigbasket.com/';
aflNaturesBasket='http://www.naturesbasket.co.in/';
aflDailyFish='https://www.dailyfish.in/';
aflKada='www.kada.in/';
aflGrofers='https://grofers.com/';
aflZopNow='https://www.zopnow.com/';

aflPepperFry='https://www.pepperfry.com';
aflUrbenLadder='https://www.urbanladder.com/';
aflFabFurnish='http://www.fabfurnish.com/';
aflHouseFull='https://www.housefull.com/';

aflYatra='https://www.yatra.com/';
aflMakeMyTrip='https://www.makemytrip.com/';
aflOYO='https://www.oyorooms.com/';
aflClearTrip='https://www.cleartrip.com/';
aflRedBus='https://www.redbus.in/';
aflGoibibo='https://www.goibibo.com/';
aflAbhiBus='http://www.abhibus.com/';

aflBookMyShow='https://in.bookmyshow.com/';
aflTicketNew='http://www.ticketnew.com/'

aflMagicBricks='http://www.magicbricks.com/';
afl99Acres='http://www.99acres.com/';
aflCommonFloor='https://www.commonfloor.com/';
aflIndiaProperty='http://www.indiaproperty.com/';

aflDailyObjects='http://www.dailyobjects.com/';
aflLatestOne='http://www.latestone.com/';

aflHouseJoy='https://www.housejoy.in/';
aflZimmber='https://zimmber.com/';

function ImageClicked(control, redurecturl)
{
   el = control.getBoundingClientRect();
   pleft = el.left + 35;
   ptop = el.top + 35;   
   d = document.getElementById("imgpreloadgif");
   d.style.position = "absolute";
   d.style.left = pleft+'px';
   d.style.top = ptop+'px';   
   d.style.display = "";
   window.location.href = redurecturl;
   d.style.display = "none";
   return true;
}
function FadeInOut(elementid) {
	DisablePreLoadImg()
  //disable all panel divs
  var divs = document.getElementsByClassName("panel");
  for(var i = 0; i < divs.length; i++)
  {    
    if((divs.item(i).id) != elementid){
      document.getElementById(divs.item(i).id).style.display = "none";
      }
  }
  //enable or disable required
	if(document.getElementById(elementid).style.display == "block"){
	document.getElementById(elementid).style.display = "none";
	}
	else{
		document.getElementById(elementid).style.display = "block";
	}  
}
function DisablePreLoadImg(){
//Disable loading image on body load
d = document.getElementById("imgpreloadgif");
	if(document.body.contains(d)){
		d.style.display = "none";
	}
}

function bodyonload(){
	DisablePreLoadImg()
}

function KeyBasedAction(e){
	if (e.keyCode == 27){
    DisablePreLoadImg()
  } 
}
//width: 106;height=106; margin:auto; background:#555; padding:5px; cursor:pointer; 
