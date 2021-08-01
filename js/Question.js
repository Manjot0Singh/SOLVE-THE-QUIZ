class Question{

    constructor(){

this.input = createInput("Enter Your Name");
this.input1= createInput("Enter option number");
this.button = createButton('SUBMIT');
this.question = createElement('h2');
this.title = createElement('h1')

this.option1 = createElement('h3');
this.option2 = createElement('h3');
this.option3 = createElement('h3');
this.option4 = createElement('h3');

    }

    hide(){
      this.input.hide();
      this.button.hide();
      this.input1.hide();
      this.title.hide();
    }


   display(){
this.title.html("MY QUIZ GAME")
this.title.position(350,0)

this.button.position(300,300)

this.question.html("Question :- What starts and ends with letter 'E' but has only one letter ?")
this.question.position(100,80);

this.option1.html("1: Everyone");
this.option1.position(150,100);

this.option2.html("2: Envelop");
this.option2.position(150,120);

this.option3.html("3:EAGLE");
this.option3.position(150,140);

this.option4.html("4:Eneone");
this.option4.position(150,160);

this.input1.position(100,200);
this.input.position(300,200);


this.button.mousePressed(()=>{
    this.title.hide();
    this.input1.hide();
    this.input.hide();
    this.button.hide();

    contestant.name = this.input.value();
    contestant.answer = this.input1.value()
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);
    


    })



}

}
