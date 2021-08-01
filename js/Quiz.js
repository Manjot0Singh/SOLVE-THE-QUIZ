class Quiz{
    constructor(){
     }

     getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question();
        question.display();
      }
  
         }
  
    play(){
      question.hide();
      background("yellow")
      Contestant.getContestantInfo();
      
      if(allContestants !== undefined){
        var displayAnswers = 200;    
        textSize(30);
        fill("blue");
        text("Contestant who answer the correct is highlighted ",150,350);
      
        for(var plr in allContestants){
         var correctAnswer = '3'        
         if(correctAnswer === allContestants[plr].answer){
        fill("green");
         }else{
           fill("red")
         }

          displayAnswers = displayAnswers+30;
          text(allContestants[plr].name+': '+allContestants[plr].answer,200,displayAnswers)
        }
        }  
        }       
        }