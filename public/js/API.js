var Differential = (function(){
    /**
    *
    * @type         : objet
    * @name         : problem
    * @link         : Differential.problem
    * @description  : Permet de stocker les informations par rapport à un problème soumis par l'utilisateur
    * @return       : none
    *
    */
    this.problem = 
    {
        "input": "", // Ce qui a été rentré par l'utilisateur
        "understanding": "", // Ce qui a été compris par l'IA
        "cleanForm": "", // Réécriture propre du problème (en utilisant MathJax)
        "type": "", // Type du problème (équation 2nd degré, etc...)
        "keyword": "", // Mot clé permettant l'interprétation du contenu (solve, plot, etc...)
    },
        
        
    /**
    *
    * @type         : objet
    * @name         : solution
    * @link         : Differential.solution
    * @description  : Permet de stocker les informations par rapport à une solution trouvée (ou non)
    * @return       : none
    *
    */
    this.solution = 
    {
        "status": "", // Le problème a-t-il été résolu ? (Si non, pourquoi)
        "form": "", // Forme de la solution (somme, série, intégrale, etc...)
        "approximation": "", // Approximation des solutions
        "solution": "", //Solutions exactes
        "plot": "", // Points permettant de tracer le graphique
    },
        
    
    /**
    *
    * @type         : function
    * @name         : start
    * @link         : Differential.start
    * @description  : Permet d'entamer le processus de résolution
    * @return       : none
    *
    */
    this.start = function()
    {
        
    }
})();