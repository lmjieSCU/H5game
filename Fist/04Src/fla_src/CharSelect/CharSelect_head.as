class CharSelect.CharSelect_head extends MovieClip
{
    var up, down, left, right, posObj, active, $name, $role, name, role, type, $type, hasHidden, $hasHidden, gotoAndStop;
    function CharSelect_head()
    {
        super();
        posObj = {up: up, down: down, left: left, right: right};
        if (active == false)
        {
            $name = "";
            $role = "none";
            return;
        } // end if
        this.activate();
    } // End of the function
    function activate()
    {
        active = true;
        posObj = {up: up, down: down, left: left, right: right};
        $name = name;
        $role = role;
        $type = type;
        $hasHidden = hasHidden;
        if ($role == "")
        {
            $role = "none";
        } // end if
        this.gotoAndStop($role + $type);
    } // End of the function
    var loadOK = false;
} // End of Class
