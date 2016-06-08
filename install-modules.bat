@ECHO OFF
REM The order should be
REM - MongoDB
REM - Nodemon
REM - Express
REM - Jade

SET /P answerMongo=Do you need MongoDB[y/n]
IF /i %answerMongo%==y goto :getMongoDB
IF /i %answerMongo%==n goto :askNodemon

:askNodemon
SET /P answerNodemon=Do you need Nodemon? [y/n]
IF /i %answerNodemon%==y goto :getNode
IF /i %answerNodemon%==n goto :askExpress

:askExpress
SET /P answerExpress=Do you need Express?[y/n]
IF /i %answerExpress%==y goto :getExpress
IF /i %answerExpress%==n goto :askJade

:askJade
SET /P answerNode=Do you need Jade?[y/n]
IF /i %answerNode%==y goto :getJade
IF /i %answerNode%==n goto :end




:getMongoDB
call npm install mongodb --save
goto :askNodemon

:getNode
call npm install nodemon -g --save
goto :askExpress

:getExpress
call npm install express --save
goto :askJade

:getJade
call npm install jade --save
goto :end


:end
echo All done!

PAUSE