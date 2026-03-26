import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/attest";

function run(){
 core.notice('Hello from custom js action')
}

run();