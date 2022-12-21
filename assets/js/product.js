btnEls = document.getElementsByClassName("variant-item");
imgEls = document.getElementsByClassName("img-item");

function showImg(n)
{
	for(let i = 0; i < imgEls.length; i++)
	{
		imgEls[i].style.display = "none";
		btnEls[i].checked = false;
	}

	imgEls[n].style.display = "block";
	btnEls[n].checked = true;
}
		

for(let i = 0; i < btnEls.length; i++)
{
	btnEls[i].addEventListener('click', function(){
		showImg(i);
	})
}

showImg(0);
