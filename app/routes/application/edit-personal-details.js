module.exports = router => { 

    router.post ('/application/edit-personal-details/name', (req,res)   => {
    
    res.redirect ('/application/edit-personal-details/telephone')
    
    
    })
    
    


    router.post ('/application/edit-personal-details/telephone', (req,res)   => {
    
        res.redirect ('/application/edit-personal-details/address')
        
        
        })


    router.post ('/application/edit-personal-details/address', (req,res)   => {
    
            res.redirect ('/application/edit-personal-details/check-answers')
            
            
            })


     router.post ('/application/edit-personal-details/check-answers', (req,res)   => {
    
                res.redirect ('/application/show')
                
                
                })
        
    }     