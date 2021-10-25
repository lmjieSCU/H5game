
    class GameRunDataVO 
    {
        public  p1FighterGroup:GameRunFighterGroup;
        public  p2FighterGroup:GameRunFighterGroup;
        public map:MapMain;
        public p1Wins:number = 0;
        public p2Wins:number = 0;
        public lastWinnerTeam:TeamVO;
        public continueLoser:FighterMain;
        public lastWinner:FighterMain;
        public lastWinnerHp:number = 1000;
        public lastLoserData:FighterVO;
        public lastLoserQi:number = 0;
        public round:number = 1;
        public gameTime:number;
        public gameTimeMax:number;
        public isTimerOver:boolean;
        public isDrawGame:boolean;
        public isTimeRuning:boolean = false

        public constructor()
        {
            this.p1FighterGroup = new GameRunFighterGroup();
            this.p2FighterGroup = new GameRunFighterGroup();
            return;
        }// end function

        public getWins(param1:FighterMain) : number
        {
            switch (Number(param1.team.id) - 1) {
                case 0:
                    return this.p1Wins;
                case 1:
                    return this.p2Wins;
            }
        }// end function

        public reset() 
        {
            this.p1Wins = 0;
            this.p2Wins = 0;
            this.round = 1;
            this.lastWinnerTeam = null;
            this.lastWinner = null;
            this.lastLoserData = null;
            this.lastLoserQi = 0;
            this.isTimerOver = false;
            this.isDrawGame = false;
            this.lastWinnerHp = GameData.I.config.fighterHP;
            this.gameTimeMax = GameData.I.config.fightTime;
            this.gameTime = this.gameTimeMax;
           this. continueLoser = null;
            return;
        }// end function

        public clear() 
        {
            this.map = null;
            this.lastWinnerTeam = null;
            this.lastWinner = null;
            this.lastLoserData = null;
            this.continueLoser = null;
            return;
        }// end function

        public nextRound() 
        {
            this.round =  this.round + 1;
            this.gameTime = this.gameTimeMax;
            this.isTimerOver = false;
            return;
        }// end function

        public setAllowLoseHP(param1:boolean) 
        {
            if (this.p1FighterGroup)
            {
               // this.p1FighterGroup.currentFighter.isAllowLoseHP = param1;
            }
            if (this.p2FighterGroup)
            {
               // this.p2FighterGroup.currentFighter.isAllowLoseHP = param1;
            }
            return;
        }// end function

    }

    