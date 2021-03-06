/**
 * MyClock
 * @constructor
 */

 var degToRad = Math.PI / 180.0;

 function MyClock(scene) {
 	CGFobject.call(this,scene);

	this.cylinder = new MyCylinder(this.scene,12,1);
	this.cylinder.initBuffers();

	this.seconds = new MyClockHand(this.scene,0.5,'seconds',270);
	this.seconds.initBuffers();

	this.minutes = new MyClockHand(this.scene,0.4,'minutes',180);
	this.minutes.initBuffers();

	this.hours = new MyClockHand(this.scene,0.3,'hours',90);
	this.hours.initBuffers();

	this.top = new MyClockTop(this.scene);
	this.top.initBuffers();

	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.clockAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.clockAppearance.setShininess(2);
	this.clockAppearance.loadTexture("/resources/images/clock.png");
 
	this.handAppearance = new CGFappearance(this.scene);
	this.handAppearance.setAmbient(0,0,0,0);
	this.handAppearance.setDiffuse(0,0,0,0);
	this.handAppearance.setSpecular(0,0,0,0);
	this.handAppearance.setShininess(0);
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {
 
	this.scene.pushMatrix();
    this.cylinder.display();
    this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.handAppearance.apply();
	this.scene.translate(0,0,1.1);
	this.scene.rotate(- this.seconds.angle * degToRad,0,0,1);
	this.seconds.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,0,1.1);
	this.handAppearance.apply();
	this.scene.rotate(- this.minutes.angle * degToRad,0,0,1);
	this.minutes.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(0,0,1.1);
	this.handAppearance.apply();
	this.scene.rotate(- this.hours.angle * degToRad,0,0,1);
	this.hours.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
	this.clockAppearance.apply();
	this.scene.translate(0,0,1);
    this.top.display();
    this.scene.popMatrix();

 };

MyClock.prototype.update = function(currTime) {
 	this.seconds.update(currTime);
 	this.hours.update(currTime);
 	this.minutes.update(currTime);
};
