class HtmlHelper{
    static encode(str){
        let temp = document.createElement('div');
        temp.textContent = str;
        return (temp.innerHTML);
    }
}
