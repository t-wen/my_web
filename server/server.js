const http = require('http');
const fs = require('fs');

let indexPage;
let pageFile;
let server;
/*
//1
fs.readFile('./server.config', 'utf8', (err, data) => {
    if (err) throw err;
    indexPage = data;
});

//2
fs.readFile(indexPage, 'utf8', (err, data) => {
    if (err) throw err;
    pageFile = data;
});

//3
const server = http.createServer((req, res) => {
    res.end(pageFile);
});

//4
server.listen(3000);

*/

function task1() {
    return new Promise(resolve => {
        fs.readFile('./server.config', 'utf8', (err, data) => {
            if (err) throw err;
            indexPage = data;
            resolve('done')
        });
    });
}

function task2() {
    return new Promise(resolve => {
        fs.readFile(indexPage, 'utf8', (err, data) => {
            if (err) throw err;
            pageFile = data;
            resolve('done')
        });
    });
}

function task3() {
    return new Promise(resolve => {
        server = http.createServer((req, res) => {
            res.end(pageFile);
            resolve('done')
        });
        server.listen(3000);
    });
}

async function allTasks() {
    await task1();
    await task2();
    await task3();
}

// 执行任务
allTasks();