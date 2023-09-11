# HTTP HTTPS и их параметры 
***
## Лабораторная работа №1

### РГУПС

Скрипт при помощи которого получил информацию о сайте  __[‍РГУПС](https://www.rgups.ru)__: 

`curl rgups.ru -I -v -L -k`
  
Использовал такие ключи как:

`-I` - Этот ключ указывает отправить только заголовки HTTP-ответа сервера, без тела ответа.  
`-v` - Этот ключ делает подробный вывод информации о запросе.  
`-L` - Этот ключ указывает следовать перенаправлениям при запросе, если сервер возвращает код (301 или 302).  
`-k` - Этот ключ отключает проверку SSL-сертификата.

Что получил в итоге: 

```shell
> HEAD / HTTP/1.1 - Эта строка запроса указывает на тип запроса (HEAD) и версию протокола (HTTP/1.1)
> Host: rgups.ru - Это Host, который указывает на имя сервера.
> User-Agent: curl/7.79.1 - Эта строка запроса указывает на устройсто с которого отправлен запрос
> Accept: */* - Строка указывающая на тип принимаемого контента 
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK - Это статус ответа сервера. Сообщает, что сервер успешно обработал запрос
< Server: nginx/1.19.1 - Строка указывает на серверное ПО и его версию
< Date: Fri, 08 Sep 2023 15:00:25 GMT - Строка содержить дату и время когда был получен ответ от сервера
< Content-Type: text/html; charset=utf-8 - Строка указывает на тип содержимого.
< Connection: keep-alive - Эта строка указывает, что соединение между клиентом и сервером должно быть поддерживаемым
< X-Powered-By: ProcessWire CMS - Строка содержит информацию о ПО, которое используется на сервере
< Set-Cookie: wire=86eadf3cc378a58f2dff124ae9cf6aef; path=/; HttpOnly; SameSite=Lax - Строка указывает на установку куки (cookie) на стороне клиента. 
Куки представляют собой данные, которые сервер отправляет браузеру, 
и они могут использоваться для отслеживания состояния сессии или других информационных целей.
< Expires: Thu, 19 Nov 1981 08:52:00 GMT - Строка указывает на дату и время истечения срока действия ответа.
Дата указана в прошлом, так как ответ не должен кэшироваться
< Cache-Control: no-store, no-cache, must-revalidate - Строка определяет инструкции для кэширования ответа.
В нашем случае указано, что ответ не должен сохраняться в кэше и должен быть проверен перед использованием
< Pragma: no-cache - Строка указывает, что ответ не должен кэшироваться и должен быть всегда запрашиваемым с сервера.
```

### GitHub

Скрипт при помощи которого получил информацию о сайте  __[GitHub](https://github.com/)__:

`curl github.com -I -v -L -k`

И получил такой ответ: 

```shell
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: GitHub.com
< Date: Mon, 11 Sep 2023 14:42:55 GMT
< Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With -  Этот заголовок указывает на факторы, 
которые могут влиять на кэширование ответа на стороне клиента или прокси-сервера. 
< content-language: en-US - Этот заголовок указывает на язык контента, который отправляется в ответе.
< ETag: W/"aa79b40beb07f510ff7a2bb5f2081380" - Этот заголовок представляет собой метку, которая идентифицирует уникальную версию ресурса. 
Он используется для управления кэшированием на стороне клиента. 
Если ресурс изменяется, ETag изменяется, и клиент может использовать его для определения, нужно ли ему получить обновленную версию ресурса.
< Cache-Control: max-age=0, private, must-revalidate
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload -  Этот заголовок относится к безопасности. 
Он указывает, что клиент должен поддерживать строгую защиту транспортного уровня (HTTPS) в течение 31536000 секунд и включать поддомены 
< X-Frame-Options: deny - Это мера безопасности, которая может помочь предотвратить атаки.
< X-Content-Type-Options: nosniff - Этот заголовок предотвращает браузер от интерпретации содержимого как чего-то, отличного от указанного в Content-Type.
< X-XSS-Protection: 0 - Этот заголовок указывает на то, что браузер не должен активировать механизм защиты от межсайтового скриптового выполнения (XSS)
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin - Этот заголовок управляет тем, какой информацией о предыдущей странице делится браузер при переходе по ссылке.
< Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Wed, 11 Sep 2024 14:43:05 GMT; HttpOnly; Secure; SameSite=Lax 
< Accept-Ranges: bytes - Этот заголовок указывает, что сервер поддерживает диапазоны запросов для данного ресурса.
< X-GitHub-Request-Id: 2E8B:15B8:5BC1C76:5D0480A:64FF2779 - Этот заголовок содержит идентификатор запроса, который может быть полезен для отслеживания запроса на стороне сервера.
```

### РЖД

Скрипт при помощи которого получил информацию о сайте  __[РЖД](https://www.rzd.ru/)__:

`curl rzd.ru -I -v -L -k --User-agent "Yandex"`

Использовал дополнительно такую строку как:

`--User-agent "Yandex"` -  Это строка, которую клиент  отправляет на сервер, чтобы указать серверу, какое программное обеспечение или устройство отправляет запрос.  

Получил такой ответ:

```shell
> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 210102 -  Этот заголовок указывает на длину (размер) содержимого ответа в байтах (210102 байта).
< Connection: keep-alive
< Date: Mon, 11 Sep 2023 15:15:17 GMT
< Vary: Accept-Encoding
< X-UCM-Pod-Name: inex-ucm-776d97f9d-4mqxf - Этот заголовок связан с идентификацией серверного подключения.
< Strict-Transport-Security: max-age=15724800; includeSubDomains
< Via: nginx3 - Этот заголовок указывает на прокси-сервер, через который прошел запрос.
< X-Frame-Options: sameorigin
< Set-Cookie: session-cookie=1783e109d75ab07a7230195f18991a243b5b5e67db63b1a4c0cd0129b3473d2627ead013828923624e868b9cc3b51475; Max-Age=86400; Path=/; secure
< X-XSS-Protection: 1; mode=block - Этот заголовок говорит браузеру о включенной защите от XSS и указывает ему блокировать скрипты, 
которые могут представлять угрозу безопасности. 
```

### Yandex

Скрипт при помощи которого получил информацию о сайте  __[Яндекс](https://yandex.ru/)__:

`curl yandex.ru -I -v -L -k`

Ответ был такой:

```shell
> HEAD /?yredirect=true HTTP/1.1 - Этот запрос будет направлен на сервер с указанием пути / и параметра запроса yredirect=true, и сервер должен ответить только заголовками ресурса, без передачи фактического содержимого.
> Host: dzen.ru
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 Ok
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Content-Type: text/html; charset=utf-8
< Set-Cookie: _yasc=lEL1OdfoCCl7jklQgIf8S+Optkf45jvhWHzi3fU4FfbSajUWSDPA9wu8Y7Vyrzr74Q==; domain=.dzen.ru; path=/; expires=Thu, 08 Sep 2033 15:33:37 GMT; secure
< X-Content-Type-Options: nosniff
< X-Frame-Options: deny
< X-Requestid: 379459519.223.1694446417520.59980 -  Этот заголовок содержит идентификатор запроса, который может быть полезен для отслеживания запроса на стороне сервера.
< X-XSS-Protection: 1; mode=block
< X-Yandex-Req-Id: 1694446417486451-151878967925589959100109-production-app-host-sas-zen-518 - Заголовок представляет собой уникальный идентификатор запроса, который полезен для отслеживания запроса на стороне сервера Yandex или системы, которая обрабатывает запросы.
```

### Python

Скрипт при помощи которого получил информацию о сайте  __[Python](https://www.python.org/)__:

`curl python.org -I -v -L -k`

Получил такой ответ:

```shell
> HEAD / HTTP/1.1
> Host: www.python.org
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 50434
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
< Date: Mon, 11 Sep 2023 16:03:44 GMT
< Age: 2224 - Этот заголовок указывает на время в секундах, прошедшее с момента кэширования ответа на сервере или прокси.
< X-Served-By: cache-iad-kiad7000025-IAD, cache-bma1622-BMA - Этот заголовок указывает на серверы и прокси, которые обслуживали запрос.
< X-Cache: HIT, HIT - Этот заголовок указывает, что ответ был получен из кэша как минимум дважды.
< X-Cache-Hits: 2, 7 - Этот заголовок указывает на количество "попаданий" в кэш для данного запроса
< X-Timer: S1694448225.673560,VS0,VE0 - Этот заголовок содержит информацию о времени, затраченном на обработку запроса на сервере.
< Vary: Cookie
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### Git

Скрипт при помощи которого получил информацию о сайте  __[Git](https://git-scm.com/)__:

`curl git-scm.com -I -v -L -k`

Получил такой ответ: 

```shell
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Mon, 11 Sep 2023 16:12:16 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen - Этот заголовок указывает, что файлы не должны открываться автоматически после загрузки.
< X-Permitted-Cross-Domain-Policies: none - Этот заголовок указывает, что политики, связанные с кросс-доменными запросами, отсутствуют.
< Referrer-Policy: strict-origin-when-cross-origin
< Cache-Control: public, max-age=14400
< Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
< X-Request-Id: 08e865a2-bae1-4a5d-90cb-b387a1e71555
< X-Runtime: 0.012125 - Этот заголовок указывает на время, затраченное на выполнение запроса на стороне сервера
< Via: 1.1 vegur
< CF-Cache-Status: HIT
< Age: 5122
< Server: cloudflare
< CF-RAY: 805130f80da00e89-AMS - Этот заголовок может содержать информацию о запросе и обработке на стороне Cloudflare.
```

### JetBrains

Скрипт при помощи которого получил информацию о сайте  __[JetBrains](https://www.jetbrains.com/)__:

`curl jetbrains.com -I -v -L -k`

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: www.jetbrains.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 47113
< Connection: keep-alive
< Date: Mon, 11 Sep 2023 16:23:58 GMT
< Server: nginx
< X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
< Expires: Mon, 11 Sep 2023 16:23:58 GMT - Этот заголовок указывает на дату и время истечения срока действия ответа в кэше.
< Cache-Control: max-age=0
< Pragma: no-cache
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
< Via: 1.1 c26999728b9b80253ea8308df470deba.cloudfront.net (CloudFront)
< Age: 167
< Set-Cookie: cf_country-region=RU-MOW; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: ARN56-P2 - Этот заголовок содержит информацию о Point of Presence CloudFront, через который прошел запрос.
< X-Amz-Cf-Id: nzXFCf6XZGkdhF33CihLxVYacKmATuF9KgLJfqJNR609Qxa5-ux39A== - Этот заголовок может содержать идентификатор запроса и обработки на стороне CloudFront.
```

### VSC

Скрипт при помощи которого получил информацию о сайте  __[VSC](https://code.visualstudio.com/)__:

`curl code.visualstudio.com -I -v -L -k`

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Length: 50213
< Content-Type: text/html; charset=utf-8
< Accept-Ranges: bytes
< ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self' -  Этот заголовок определяет политику безопасности контента и разрешает встраивание ресурсов только с текущего домена.
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET
< x-azure-ref: 0MUH/ZAAAAAASb7vV5T3+TLJL4hpnRGDlQU1TMDRFREdFMTkyMgBiZTg3ZGM2ZC00MGY5LTQ1YjAtODgxMC05OTEwODdlZjhiMjk=
< X-Cache: CONFIG_NOCACHE
< Date: Mon, 11 Sep 2023 16:32:49 GMT
```

>Напуственная цитата №1
>>_Дорогу осилит идущий_

