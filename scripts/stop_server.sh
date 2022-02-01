#!/bin/bash
# if the httpd process is running it will return the output and based on that we are stopping the process
isExistApp = `pgrep httpd`
if [[ -n  $isExistApp ]]; then
    service httpd stop        
fi

