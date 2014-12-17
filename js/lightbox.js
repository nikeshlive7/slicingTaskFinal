// JavaScript Document


var zoomButton = document.getElementById("zoom-button");
var lightBoxParent = (document.getElementsByClassName("main-container"))[0];
var lightbox = new LightBox(lightBoxParent);


zoomButton.onclick = function()
{
	console.log("clicked");
	lightbox.init();
	return false;
}

function LightBox(lightBoxParent)
{
	var that = this;
	this.parent = lightBoxParent;
	this.lightBoxElement;
	this.closeButton;
	
	this.init = function()
	{
		that.parent.style.position = "relative";
		that.lightBoxElement = document.createElement("div");
		that.parent.appendChild(that.lightBoxElement);
		that.lightBoxElement.className = "lightbox";
		
		that.closeButton = document.createElement("div");
		that.lightBoxElement.appendChild(that.closeButton);
		that.closeButton.className = "lightbox-closebutton";
		that.closeButton.onclick = function()
		{
			that.closeLightBox();
		}
		
		var image = document.createElement("img");
		var src = document.getElementsByClassName(".main-top-container-right")[0].children[0].getAttribute("src");
		image.setAttribute("src",src);
		that.lightBoxElement.appendChild(image);
		
	}
	
	this.closeLightBox = function()
	{
		that.parent.removeChild(that.lightBoxElement);
		that.parent.style.position = "inherited";
	}
	
	
}
