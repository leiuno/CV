var APP_ID = 'eiYd5gBPG5Q2zXDFIAMfUY8V-gzGzoHsz';
var APP_KEY = 'RNM4HXzGcaFy2DiaTjIin081';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log(2)

var myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit',function(e){
  e.preventDefault()
  let name = myForm.querySelector('input[name=name]').value
  let content = myForm.querySelector('input[name=content]').value
  var Message = AV.Object.extend('message');
  var message = new Message()
  message.save({
    'name': name,
    'content': content
  }).then(function(object){
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}: ${object.attributes.content}`
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
    myForm.querySelector('input[name=content]').value = ''
  })
})

var query = new AV.Query('message')
  query.find().then(function (messages) {
    let array = messages.map((item) => item.attributes)
    array.forEach(function(item){
      let li = document.createElement('li')
      li.innerText = `${item.name}: ${item.content}`
      let messageList = document.querySelector('#messageList')
      messageList.appendChild(li)
      
    })
  },function(error){
    alert('提交失败')
  })



  