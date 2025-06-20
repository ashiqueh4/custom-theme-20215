
    document.addEventListener('DOMContentLoaded', function() {
      var tabs = document.querySelectorAll('.custom-tabs-section .tabs li');
      var contents = document.querySelectorAll('.custom-tabs-section .tab-content');
      var indicator = document.querySelector('.custom-tabs-section .tab-indicator');
      
      function setIndicator(tab) {
        indicator.style.width = tab.offsetWidth + 'px';
        indicator.style.left = tab.offsetLeft + 'px';
      }

      var activeTab = document.querySelector('.custom-tabs-section .tabs li.active');
      if (activeTab) {
        setIndicator(activeTab);
      }

      tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
          tabs.forEach(function(t) { t.classList.remove('active'); });
          contents.forEach(function(c) { c.classList.remove('active'); });
          
          tab.classList.add('active');
          var tabId = tab.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
          
          setIndicator(tab);
        });
      });

      window.addEventListener('resize', function() {
        var currentActive = document.querySelector('.custom-tabs-section .tabs li.active');
        if (currentActive) {
          setIndicator(currentActive);
        }
      });
    });
