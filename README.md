# **📈COVID CHART📈**

# 📓*project*📓
>interface
![interface](/images/fullScr.png)
---
>write data
![more content](/images/click.png)
---
>responsive
![responsive](/images/responsive.png)
---
>filter topic
![selected item](/images/especific.png)

# *📎extensions📎*
on `<head>` put:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" integrity="sha256-R4pqcOYV8lt7snxMQO/HSbVCFRPMdrhAFMH+vr9giYI=" crossorigin="anonymous"></script>
```
that will import the extension of the graphic (Chart) from cdn cloud, without installation

# 🤔*how it works?*🤔
he get the data from a API with:
```javascript
const res = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1`)
    .then(res=>res.json())
const data = await res.data
```
and stores in specific arrays your specific datas