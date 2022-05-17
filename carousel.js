const carousel1_img=[
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "./images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg"
]
const carousel2_img=[
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg"
]
const carousel3_img=[
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg"
]
const carousel4_img=[
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg"
]
const carousel5_img=[
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg"
]
const carousel6_img=[
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg"
]
const carousel7_img=[
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg"
]
const carousel8_img=[
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg",
    "/images_compresser/astaria-holland-j1gHpeHxnMw-unsplash_large.jpg"
]
const carousel1=document.querySelector(".carousel1");
// const carousel2=document.querySelector(".carousel2");
// const carousel3=document.querySelector(".carousel3");
// const carousel4=document.querySelector(".carousel4");
// const carousel5=document.querySelector(".carousel5");
// const carousel6=document.querySelector(".carousel6");
// const carousel7=document.querySelector(".carousel7");
// const carousel8=document.querySelector(".carousel8");

function create_card_carousel(contener,tab_url){

    for (let i = 0; i < tab_url.length; i++) {
       contener.innerHTML += 
        `
        <div class="card_prod item">
            <img src="${tab_url[i]}" alt="">
            <div class="card_prod_desc">
                <div class="contener_desc_prod">
                    <div class="quant_value_prod">
                        <span class="quant">
                        <h3>Quantite :</h3>
                        <input type="number" min="1" max="1000" value="1">
                        </span>
                        <span class="price">BIF <strong>4000</strong>
                        </span>
                    </div>
                    <span class="link_prod">
                        <i class="fas fa-heart like"></i>
                        <i class="fas fa-share"></i>
                    </span>
                </div>
                <button>Acheter</button>
            </div>
        </div>
       `      
    }
}
create_card_carousel(carousel1,carousel1_img);
/*create_card_carousel(carousel2,carousel2_img);
create_card_carousel(carousel3,carousel3_img);
create_card_carousel(carousel4,carousel4_img);
create_card_carousel(carousel5,carousel5_img);
create_card_carousel(carousel6,carousel6_img);
create_card_carousel(carousel7,carousel7_img);
create_card_carousel(carousel8,carousel8_img);*/



/**
 * cade source carousel
 */
/**
 * permet d'ajouter la navigation tactile sur le carousel en argument
 */
 class carousel_touch_plugin{
    
    /**
     * @param {carousel} carousel c'est une instance de la classe carousel
     */
    constructor(carousel){

        carousel.contener.addEventListener("dragstart", e => e.preventDefault())
        carousel.contener.addEventListener("mousedown",this.start_drag.bind(this))
        carousel.contener.addEventListener("touchstart",this.start_drag.bind(this))
        window.addEventListener("mousemove",this.drag.bind(this))
        window.addEventListener("touchmove",this.drag.bind(this))
        window.addEventListener("mouseup",this.end_drag.bind(this))
        window.addEventListener("touchend",this.end_drag.bind(this))
        window.addEventListener("touchcancel",this.end_drag.bind(this))
        this.carousel= carousel
    }

    /**
     * Quand on demarre le deplacement
     * @param {MouseEvent | TouchEvent} e 
     */
    start_drag(e){

        if(e.touches ){
            if(e.touches.length > 1){
                return
            }else{
                e= e.touches[0]
            }
        }
        this.origin ={ x: e.screenX ,y: e.screenY }
        this.cont_width=this.carousel.contener_width
        this.carousel.disable_transition()
    }
    
    /**
     * Deplacement du touch ou mouse
     * @param {MouseEvent | TouchEvent} e 
     */
    drag(e){
        e.preventDefault()
        if(this.origin){
            let point = e.touches ? e.touches[0] : e
            let translate ={x: point.screenX - this.origin.x , y: point.screenY - this.origin.y}
            if(e.touches && Math.abs(translate.x) > Math.abs(translate.y)){
                e.preventDefault()
                e.stopPropagation()
            }
            let base_translate=this.carousel.currentItem * -100 / this.carousel.items.length
            this.last_translate = translate
            this.carousel.translate( base_translate + 100 * translate.x / this.cont_width)
        }
    }

    /**
     * Fin du deplacement
     * @param {MouseEvent | TouchEvent} e 
     */
    end_drag(e){
        
        if(this.origin && this.last_translate){
            this.carousel.enable_transition()
            if(Math.abs(this.last_translate.x / this.carousel.carousel_width) > 0.2){
                if(this.last_translate.x < 0){
                    this.carousel.next()
                }else{
                    this.carousel.prev()
                }
            }else{
                this.carousel.goTo(this.carousel.currentItem)
            }
        }
        this.origin = null
    }
}


class carousel{

    /**
     * 
     * @param {HTMLElement} element Element qu'on veut transforme en carousel
     * @param {Object} options
     * @param {Object} [options.slidesToScroll = 1] Nombre d'element à faire defile
     * @param {Object} [options.slidesToVisible = 1] Nombre d'element qui sera visible dans un slide
     * @param {boolean} [options.loop=false ] Doit on boucler a la fin du carousel
     * @param {boolean} [options.infinite=false ]
     */
    constructor (element,options={}){

        this.element=element;
        this.options=Object.assign({},{

            slidesToScroll: 1,
            slidesToVisible: 1,
            loop: false,
            infinite: false,
        },options)
        if(this.options.loop && this.options.infinite){
            throw new Error("un carousel ne peut etre a la fois en boucle et enfinie");
        }
        let children=[].slice.call(element.children) // quand on veut change un NodeList en Tableau
        this.currentItem = 0
        this.isMobile = false
        this.istablete = false
        this.isbig_screen = false
        this.mouveCallbacks= []
        
        // Modification du DOM

        this.root=this.createDivWithClass("carousel")
        this.contener=this.createDivWithClass("carousel_contener")
        this.root.appendChild(this.contener)
        this.root.setAttribute("tabindex","0")
        this.element.appendChild(this.root)
        this.element.classList.add("modal_content")
        
        this.items= children.map(child => {

            let item=this.createDivWithClass("carousel_item")
            item.appendChild(child)        
            return item
        });

        if(this.options.infinite){

            this.offset=this.options.slidesToVisible + this.options.slidesToScroll;
            if(this.offset > children.length){
                console.error("vous n'avez pas assez d'element dans le carousel",element);
            }
            this.items=[
                ...this.items.slice(this.items.length - this.offset).map(item => item.cloneNode(true)),
                ...this.items,
                ...this.items.slice(0 - this.offset).map(item => item.cloneNode(true)),
            ]
            this.goTo(this.offset,false)
        }

        this.items.forEach(item => this.contener.appendChild(item))
        this.setStyle()
        this.createNavigation()

        // Evenement
        this.mouveCallbacks.forEach(cb => cb(this.currentItem))
        this.window_on_resize()
        window.addEventListener("resize",this.window_on_resize.bind(this))
        this.root.addEventListener("keyup",e =>{
            if(e.key === "ArrowLeft" || e.key ==="Left"){
                this.next()
            }  
            else if(e.key === "ArrowRight" || e.ke === "Right"){
                this.prev()
            }   
        })

        if(this.options.infinite){ 

            this.contener.addEventListener("transitionend",this.reset_infinite.bind(this))
        }
        new carousel_touch_plugin(this)
    }
    /**
     * appliquer les  bonnes dimensions aux elements du carousel
     */
    setStyle(){

        let ratio=this.items.length / this.slidesToVisible
        this.contener.style.width=(ratio * 100)+"%";
        this.items.forEach(item =>{
            item.style.width=((100 / this.slidesToVisible) / ratio )+ "%";
            item.classList.add("center_item");
        })
    }

    createNavigation(){

        let next_Button =  this.createDivWithClass("carousel_next")
        let prev_Button = this.createDivWithClass("carousel_prev")

        this.root.appendChild(next_Button)
        this.root.appendChild(prev_Button)

        next_Button.addEventListener("click",this.next.bind(this))
        prev_Button.addEventListener("click",this.prev.bind(this))

        if(this.options.loop === true){
            return
        }
        this.onMove(index =>{
            if(index === 0){
                prev_Button.classList.add("carousel_prev_hidden");
            }
            else{
                prev_Button.classList.remove("carousel_prev_hidden");
            }
            if(this.items[this.currentItem +  this.slidesToVisible] === undefined){
                next_Button.classList.add("carousel_next_hidden");
            }
            else{
                next_Button.classList.remove("carousel_next_hidden");
            }
        })
    }

    translate(pourcent){
        this.contener.style.transform=`translate3d(${pourcent}%,0,0)`
    }
    next(){        
        this.goTo(this.currentItem + this.slidesToScroll)
    }

    prev(){
        this.goTo(this.currentItem - this.slidesToScroll)
    }

    disable_transition(){
        this.contener.style.transition="none"
    }

    enable_transition(){
        this.contener.style.transition=""
    }
    /**
     * Deplace le carousel vers l'element cible
     * @param {number} index 
     */
     goTo(index, animation=true){

        if(index < 0){
            if(this.options.loop){
                index = this.items.length - this.slidesToVisible;
            }else{
                return 
            }  
        }else if(index > this.items.length ||
             (this.items[this.currentItem +  this.slidesToVisible] === undefined) && index >this.currentItem){
                if(this.options.loop){
                    index=0
                }else{
                    return 
                }   
        }
        let translateX = index * -100 / this.items.length
        if(animation ==false){
            this.contener.style.transition="none";
        }
        this.contener.style.transform= "translate3d("+ translateX +"%,0,0)"
        this.contener.offsetWidth; // force repaint
        if(animation === false){
            this.contener.style.transition="";
        }
        this.currentItem = index
        this.mouveCallbacks.forEach(cb => cb(index))

    }

     /**
     * Deplace le contener pour donner l'impression d'un slider infinie
     */
      reset_infinite(){
        /**
         * explication
         * 1 2 3 4 5 6 7
         * 3 4 5 6 7 | 1 2 3 4 5 6 7 | 1 2 3 4 5
         */
            if(this.currentItem <= this.options.slidesToScroll){
    
                this.goTo(this.currentItem + (this.items.length - 2 * this.offset), false);
    
            }else if(this.currentItem >= this.items.length - this.offset){
    
                this.goTo(this.currentItem - (this.items.length - 2 * this.offset),false)
            }
        }
    /**
     * 
     * @param {callback} cb 
     */
    onMove(cb){
        this.mouveCallbacks.push(cb)
    }
    window_on_resize(){
        let mobile = window.innerWidth < 680
        let tablete=window.innerWidth < 1000
        
        if(mobile !== this.isMobile){
            this.isMobile= mobile
           this.set_style_movcb()
        }
        else if(tablete !== this.istablete ){
            this.istablete= tablete
            this.set_style_movcb()
        }
    }
    set_style_movcb(){
        this.setStyle()
        this.mouveCallbacks.forEach(cb => cb(this.currentItem))
    }
    /**
     * 
     * @param {String} ClassName 
     * @returns {HtmlElement}
     */
    createDivWithClass(ClassName){
        let div=document.createElement("div");
        div.setAttribute("class",ClassName)
        return div;
    }
    
    /**
     *  @returns{number}
     */
    get slidesToScroll(){

        return this.isMobile ? 1 : this.istablete ? 2 :this.options.slidesToScroll
        //return this.isMobile ? 1 : this.options.slidesToScroll
    }
    
    get slidesToVisible(){
        return this.isMobile ? 1 : this.istablete ? 2  :this.options.slidesToVisible
        //return this.isMobile ? 1 : this.options.slidesToVisible
    }
    /**
     * @return{number}
     * */
    get contener_width(){
        return this.contener.offsetWidth
    }

    /**
     * @return{number}
     * */
    get carousel_width(){
        return this.root.offsetWidth
    }
}
/**
 * pour eviter les erreurs du chargement quand javascript est asynchrone
 */
function on_ready(){
    new carousel(document.querySelector(".carousel1"),{
        slidesToScroll: 2,
        slidesToVisible:3,
        loop: false,
        infinite: true,
    })
}
if(document.readyState !== "loading"){
    on_ready()
}
document.addEventListener("DOMContentLoaded",on_ready)

const carousel=document.querySelector(".contener_modal ")
const close_modal=document.querySelectorAll(".close_modal")
close_modal.forEach( trigger=> {
    trigger.addEventListener("click",()=>{
        
    })
    }
)