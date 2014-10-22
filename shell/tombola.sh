#!/bin/zsh

main(){
# the attendees
arr=("Duffy Duck" "Some Body" )
# check if homebrew is installed
if hash brew 2>/dev/null; then
  echo "homebrew is installed"
else
# no homebrew? install it
  echo "installing homebrew"
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  brew doctor
fi
# check if coreutils are installed
if hash gshuf 2>/dev/null; then
  echo "coreutils are installed"
else
# noe coreutils? installe them
  echo "installing coreutils"
  brew install coreutils
fi
# generate 5 random numbers between 1 and 34
entries=($(gshuf -i 1-2 -n 1))
# loop the array of attendees
for i in ${entries[@]}
do
# output to console
    echo ${arr[$i]}
done
}
main