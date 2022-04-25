
              (function() {
                var cookies = document.cookie.split(';');
                var keyValue = cookies.find(mp => {
                  var values = mp.split('=');
                  return values[0].trim() === 'data_opt_out';
                });
                if(keyValue && keyValue.split('=')[1] === 'y') {
                  window['ga-disable-UA-162512367-1'] = true;
                }
             }())
              
