function positionContainer(){
  const static_container = document.querySelector('.static_container1')
  const static_container2 = document.querySelector('.static_container2')
  const section1 = document.querySelector('.section1')
  const input1 = document.querySelector('.input1')
  const input2 = document.querySelector('.input2')
    const { scrollHeight} = document.documentElement;

    const scrollTop = document.documentElement.scrollTop;

    const scrollPercent = scrollHeight - scrollTop;

    if(scrollTop >= (section1.offsetTop-30)){
        static_container2.classList.add('become_fixed')
        input1.style.width = '24%'
        input2.style.width = '24%'

    }else{
       static_container2.classList.remove('become_fixed')
       input1.style.width = '90%';
       input2.style.width = '90%';
    }

  }

export default positionContainer;