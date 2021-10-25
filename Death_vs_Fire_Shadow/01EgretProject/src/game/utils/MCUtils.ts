

class MCUtils 
    {

        public static hasFrameLabel(param1:zmovie.ZMovieClip, param2:string) : boolean
        {
            var _loc_3:any = param1.getLabels();
            for  (let _loc_4 in _loc_3)
            {
                if (_loc_4 == param2)
                {
                    return true;
                }
            }
            return false;
        }// end function

    }
