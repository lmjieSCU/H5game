class AD_loading extends AD
{
    var adArray, sendvar, adID, url_xml, url_count, my_xml, ad_order, time_play, timer_play, ad_showNumber, ad_mc, loadOK, timerLoad;
    function AD_loading()
    {
        super();
        adArray = new Array();
        sendvar = new LoadVars();
    } // End of the function
    function init()
    {
        adID = 0;
        url_xml = _level0.adPath + "/" + _level0.game + "/" + "ad_loading.xml";
        url_count = _level0.adPath + "/" + _level0.game + "/" + "count.asp";
        function xmlOnload()
        {
            this.paseXML(my_xml);
            if (ad_order == 0)
            {
                adArray = this.disOrder(adArray);
            } // end if
            this.loadAD(adID);
        } // End of the function
        this.loadXML(url_xml);
        sendvar.onLoad = function (success)
        {
            if (success)
            {
            } // end if
        };
        timer_play = setInterval(this, "checkLoad", time_play);
    } // End of the function
    function loadXML(url)
    {
        my_xml = new XML();
        my_xml.ignoreWhite = true;
        var owner = this;
        my_xml.onLoad = function (success)
        {
            if (success)
            {
                trace ("loadXML:::: 成功");
                owner.xmlOnload();
            }
            else
            {
                trace ("loadXML::: 失败");
                owner.loadOK();
            } // end else if
        };
        my_xml.load(url);
    } // End of the function
    function paseXML(my_xml)
    {
        ad_order = Number(my_xml.firstChild.attributes.order);
        ad_showNumber = Number(my_xml.firstChild.attributes.showNumber);
        var _loc5 = my_xml.firstChild.childNodes;
        for (var _loc4 = 0; _loc4 < _loc5.length; ++_loc4)
        {
            var _loc3 = _loc5[_loc4];
            var _loc2 = new Object();
            _loc2.file = _loc3.childNodes[0].firstChild.nodeValue;
            _loc2.width = _loc3.childNodes[1].firstChild.nodeValue;
            _loc2.height = _loc3.childNodes[2].firstChild.nodeValue;
            _loc2.time = Number(_loc3.childNodes[3].firstChild.nodeValue * 1000);
            adArray.push(_loc2);
        } // end of for
        trace ("广告数:" + adArray.length);
    } // End of the function
    function disOrder(_adArray)
    {
        var _loc1 = new Array();
        for (var _loc5 in _adArray)
        {
            _loc1[_loc5] = _adArray[_loc5];
        } // end of for...in
        var _loc4 = new Array();
        for (var _loc5 in _loc1)
        {
            var _loc2 = int(Math.random() * _loc1.length);
            _loc4.push(_loc1[_loc2]);
            _loc1.splice(_loc2, 1);
        } // end of for...in
        return (_loc4);
    } // End of the function
    function loadAD(id)
    {
        var adObj = adArray[id];
        trace ("广告文件：" + adObj.file);
        ad_mc._lockroot = true;
        ad_mc._x = -adObj.width / 2;
        ad_mc._y = -adObj.height / 2;
        var _loc2 = new Object();
        var _loc3 = new MovieClipLoader();
        var owner = this;
        _loc2.onLoadComplete = function ()
        {
            if (!adObj.time)
            {
                adObj.time = 5000;
            } // end if
            owner.timerLoad = setInterval(owner, "loadNext", adObj.time);
            System.security.allowDomain(owner.ad_mc._url);
            owner.ad_onLoad();
            owner.isLoaded = true;
        };
        _loc2.onLoadError = function ()
        {
            owner.timerLoad = setInterval(owner, "loadNext", 1000);
        };
        _loc3.addListener(_loc2);
        _loc3.loadClip(adObj.file, ad_mc);
    } // End of the function
    function loadNext()
    {
        if (_root.getBytesLoaded() == _root.getBytesTotal() && adID + 1 >= ad_showNumber)
        {
            this.loadOK();
            return;
        } // end if
        clearInterval(timerLoad);
        ++adID;
        if (adID == adArray.length)
        {
            trace ("加载一轮");
            adID = 0;
        } // end if
        this.loadAD(adID);
        trace ("adID: " + adID);
    } // End of the function
    function checkLoad()
    {
        if (!isLoaded)
        {
            this.loadOK();
        } // end if
        clearInterval(timer_play);
    } // End of the function
    var isLoaded = false;
} // End of Class
