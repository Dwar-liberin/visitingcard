
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "card",
              serverUrl: "https://lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = (fontURL) => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        fontURL,
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  
    
      const logo_5e388fea_84765e388_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_5e388fea_84765e388_texture = await loadTexture("assets/circle-wa-sm_113.png");
  const logo_5e388fea_84765e388_image = new THREE.MeshBasicMaterial({
      map: logo_5e388fea_84765e388_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_5e388fea_84765e388 = new THREE.Mesh(logo_5e388fea_84765e388_iconGeometry, logo_5e388fea_84765e388_image);
    logo_5e388fea_84765e388.scale.set(0.2, 0.2, 0.2);
    logo_5e388fea_84765e388.position.set(0.65, 0, 0);
    logo_5e388fea_84765e388.rotation.set(-0.001, 0, 0);
    logo_5e388fea_84765e388.userData.clickable = true
    
    logo_5e388fea_84765e388.userData.eventName ="Whatsapp"
const logo_ae20a04a_eccdae20a_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_ae20a04a_eccdae20a_texture = await loadTexture("assets/circle-mail-sm_125.png");
  const logo_ae20a04a_eccdae20a_image = new THREE.MeshBasicMaterial({
      map: logo_ae20a04a_eccdae20a_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_ae20a04a_eccdae20a = new THREE.Mesh(logo_ae20a04a_eccdae20a_iconGeometry, logo_ae20a04a_eccdae20a_image);
    logo_ae20a04a_eccdae20a.scale.set(0.2, 0.2, 0.2);
    logo_ae20a04a_eccdae20a.position.set(0.65, 0.25, 0);
    logo_ae20a04a_eccdae20a.rotation.set(-0.001, 0, 0);
    logo_ae20a04a_eccdae20a.userData.clickable = true
    
    logo_ae20a04a_eccdae20a.userData.eventName ="Email"
const square_linkedin_4c60777_iconGeometry = new THREE.PlaneGeometry(1, 0.3);
   const square_linkedin_4c60777_texture = await loadTexture("assets/square-linkedin_103.svg");
  const square_linkedin_4c60777_image = new THREE.MeshBasicMaterial({
      map: square_linkedin_4c60777_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const square_linkedin_4c60777 = new THREE.Mesh(square_linkedin_4c60777_iconGeometry, square_linkedin_4c60777_image);
    square_linkedin_4c60777.scale.set(0.6, 0.6, 0.6);
    square_linkedin_4c60777.position.set(0.203, -0.564, 0);
    square_linkedin_4c60777.rotation.set(0, 0, 0);
    square_linkedin_4c60777.userData.clickable = true
    
    square_linkedin_4c60777.userData.eventName ="Linkedin"
const logo_7ff333e0_636d7ff33_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_7ff333e0_636d7ff33_texture = await loadTexture("assets/circle-call-sm_118.png");
  const logo_7ff333e0_636d7ff33_image = new THREE.MeshBasicMaterial({
      map: logo_7ff333e0_636d7ff33_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_7ff333e0_636d7ff33 = new THREE.Mesh(logo_7ff333e0_636d7ff33_iconGeometry, logo_7ff333e0_636d7ff33_image);
    logo_7ff333e0_636d7ff33.scale.set(0.2, 0.2, 0.2);
    logo_7ff333e0_636d7ff33.position.set(0.65, -0.24, 0);
    logo_7ff333e0_636d7ff33.rotation.set(-0.001, 0, 0);
    logo_7ff333e0_636d7ff33.userData.clickable = true
    
    logo_7ff333e0_636d7ff33.userData.eventName ="Call"
const image_7a749534_4294feb0_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_7a749534_4294feb0_texture = await loadTexture("assets/chinmay-garg.jpg");
  const image_7a749534_4294feb0_image = new THREE.MeshBasicMaterial({
      map: image_7a749534_4294feb0_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_7a749534_4294feb0 = new THREE.Mesh(image_7a749534_4294feb0_iconGeometry, image_7a749534_4294feb0_image);
    image_7a749534_4294feb0.scale.set(0.3, 0.3, 0.3);
    image_7a749534_4294feb0.position.set(-0.322, -0.496, 0.045);
    image_7a749534_4294feb0.rotation.set(-0.001, 0, 0);
    
    
    
const target_imageChinma00bca_iconGeometry = new THREE.PlaneGeometry(1, 0.6167341430499326);
   const target_imageChinma00bca_texture = await loadTexture("assets/Chinmay CYMK-V5-1.png");
  const target_imageChinma00bca_image = new THREE.MeshBasicMaterial({
      map: target_imageChinma00bca_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const target_imageChinma00bca = new THREE.Mesh(target_imageChinma00bca_iconGeometry, target_imageChinma00bca_image);
    target_imageChinma00bca.scale.set(1, 1, 1);
    target_imageChinma00bca.position.set(0.01, -0.01, 0.01);
    target_imageChinma00bca.rotation.set(-0.001, 0, 0);
    
    
    
const image_1658cb04_9ccbd20a_iconGeometry = new THREE.PlaneGeometry(1, 0.62);
   const image_1658cb04_9ccbd20a_texture = await loadTexture("assets/Chinmay CYMK-V5-1.png");
  const image_1658cb04_9ccbd20a_image = new THREE.MeshBasicMaterial({
      map: image_1658cb04_9ccbd20a_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_1658cb04_9ccbd20a = new THREE.Mesh(image_1658cb04_9ccbd20a_iconGeometry, image_1658cb04_9ccbd20a_image);
    image_1658cb04_9ccbd20a.scale.set(1, 1, 1);
    image_1658cb04_9ccbd20a.position.set(0, 0, 0);
    image_1658cb04_9ccbd20a.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_3696ebdd81e_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_3696ebdd81e_Item0Video = await loadVideo("assets/Liberin Technologies.mp4");

    const video_asset_3696ebdd81e_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_3696ebdd81e_Item0Video
    );

    let video_asset_3696ebdd81e_Item0VideoMaterial

      video_asset_3696ebdd81e_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_3696ebdd81e_Item0VideoTexture,
          transparent:true
        })
    
     const video_asset_3696ebdd81e = new THREE.Mesh(
      video_asset_3696ebdd81e_planeGeometry,
      video_asset_3696ebdd81e_Item0VideoMaterial
    );

  video_asset_3696ebdd81e.position.set(0, 0.63, 0);



  if (isIOS) {
    video_asset_3696ebdd81e_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_3696ebdd81e_Item0Video.loop=true;
  
  video_asset_3696ebdd81e.scale.set(1, 1, 1);

    video_asset_3696ebdd81e.rotation.set(0, 0, 0);

    
  
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_3696ebdd81e_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === logo_5e388fea_84765e388) {
        setTimeout(()=>{
          window.location.href = "https://wa.me/9891883207?text=messageHear"
        },100)
        }
      

      if (o.userData.clickable && o === logo_ae20a04a_eccdae20a) {
        setTimeout(()=>{
          window.location.href = "mailto:chinmay@liberintechnologies.com"
        },100)
        }
      

      if (o.userData.clickable && o === square_linkedin_4c60777) {
        setTimeout(()=>{
          window.location.href = "https://www.linkedin.com/in/chinmay-garg/"
        },100)
        }
      

      if (o.userData.clickable && o === logo_7ff333e0_636d7ff33) {
        setTimeout(()=>{
          window.location.href = "tel:9891883207"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(logo_5e388fea_84765e388)
anchor.group.add(logo_ae20a04a_eccdae20a)
anchor.group.add(square_linkedin_4c60777)
anchor.group.add(logo_7ff333e0_636d7ff33)
anchor.group.add(image_7a749534_4294feb0)

anchor.group.add(image_1658cb04_9ccbd20a)
anchor.group.add(video_asset_3696ebdd81e)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            








     
      video_asset_3696ebdd81e_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_3696ebdd81e_Item0Video.pause();

        







    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    