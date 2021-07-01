# Woowa-tech-pre Node.js

우아한 테크캠프 Node.js 사전 학습

## 공통

1. learnyounode를 설치합니다.
   > npm install -g learnyounode
2. learnyounode를 실행하여 문제를 확인합니다.
   > learnyounode
3. learnyounode verify 파일명을 통해 문제를 제출합니다.
   > learnyounode verify program.js

## 1. hello-world.js

console.log로 HELLO WORLD를 출력했습니다.

## 2. baby-steps.js

[process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)를 사용하여 숫자 인수의 합계를 출력했습니다.  

> process.argv는 명령 실행에 사용한 node와 파일의 path, 파라미터를 담은 배열입니다.  
> process.argv[0]은 process.argv0과 동일합니다.

## 3. my-first-io.js

2번에서 사용한 process.argv와 [readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)를 사용하여 파일에 포함된 라인을 출력했습니다. 

> readFileSync는 동기적으로 실행되므로 callback이 존재하지 않습니다.

## 4. my-first-async-io.js

3번에서 readFileSync 대신 async인 [readFile](https://nodejs.org/api/fs.html#fs_filehandle_readfile_options)을 사용했습니다.  

> readFile의 options인 encoding을 두 번째 인자로 전달하면 string을 반환하며, options을 생략하고 callback을 전달하면 buffer를 반환하게 됩니다.  

## 5. filtered-ls.js

디렉토리에 있는 파일 중 인수로 주어진 형식의 파일을 출력해야 하는 문제로 
[readdir](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)을 사용했습니다.  

> readdir은 readFile과 동일하게 callback과 encoding을 추가할 수 있습니다.  

## 6. make-it-modulear.js

5번과 비슷한 요구사항을 별도의 모듈을 통해 처리해야 하는 문제로 파일 **mymodule.js**를 추가적으로 생성해야 했습니다.  
문제의 조건에서 모듈은 콘솔을 직접 호출하면 안되며, 모듈에 전달하는 콜백함수의 인자는 에러, 데이터 순 입니다. 그리고, 5번과는 약간 다르게 에러에 대한 처리가 필요합니다. 
[module.exports](https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#modules_module_exports)를 사용했습니다.  

## 7. http-client.js

주어진 URL로 HTTP GET요청을 보내고, onEvent를 활용하여 반환된 값을 출력해야 하는 문제입니다.  
요청을 위해 **http** 모듈의 [get](https://nodejs.org/api/http.html#http_http_get_options_callback)을 사용했습니다.  

> res는 setEncoding 메소드를 통해 encoding을 지정할 수 있으며,  
> 기본적으로 buffer를 반환하지만 encoding을 지정할 경우 string을 반환합니다.

## 8. http-collect.js

7번처럼 주어진 URL로 HTTP GET요청을 보내고 onEvent의 data, end를 활용하여 반환된 값을 저장하고 출력하는 문제입니다.  

## 9. juggling-async.js

8번에서 url이 배열로 주어지는 문제입니다.  
여러개의 요청을 비동기로 처리하지만 출력 시에는 최초 입력된 순서를 지켜야하므로 Promise.all을 사용했습니다.  

## 10. time-server.js

인수로 port가 주어지며, TCP 서버를 만들고 socket의 end 메소드에 현재 시각을 보내는 이벤트를 만들어야 하는 문제입니다.  
**net** 모듈의 [createServer](https://nodejs.org/api/net.html#net_net_createserver_options_connectionlistener)를 사용했습니다.

## 11. http-file-server.js

pipe를 활용하여 요청한 url과 file 경로와 동일한 파일을 제공해야 하는 문제입니다.  
인수로 포트와 file 경로가 주어집니다.  
**http** 모듈의 [createServer](https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener)와 **fs** 모듈의 [createReadStream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)을 사용했습니다.  

## 12. http-uppercaserer.js

POST 요청만 처리하는 서버를 만드는 문제입니다.  
hint를 참고하여 [through2-map](https://www.npmjs.com/package/through2-map)을 설치했습니다.  
POST 여부는 request.method를 통해 확인했습니다.  

## 13. http-json-api-server.js

[url](https://nodejs.org/api/url.html) 모듈을 사용했습니다.  
> 생성자 함수인 new URL은 input과 base를 인수로 전달 받습니다.  

## 학습 참고
1. [Node.js 공식 사이트 문서](https://nodejs.org/dist/latest-v16.x/docs/api/)
2. [Node.js Stream 당신이 알아야할 모든 것 1편](https://jeonghwan-kim.github.io/node/2017/07/03/node-stream-you-need-to-know.html)
