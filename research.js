AFRAME.registerComponent("crimson",{
    init:function() {
        t_r=5
        this.el.addEventListener('collide', function(e){
            e.detail.target.el.remove();
            t_r=t_r-1
            tbrt=document.getElementById("tbr")
            tbrt.setAttribute('text',{value: String(t_r)})
            if (t_r==0){
                caspian=document.getElementById("Amethyst")
                caspian.setAttribute('text',{value:"You Won!!"})
            }
        })
        
        
        
    }   
       

    
})