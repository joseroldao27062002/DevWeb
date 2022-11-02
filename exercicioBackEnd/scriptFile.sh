#!/bin/bash
for ((i=1;i<4;i++))
do
	touch "f$i.txt"
	echo "This is the file f$i.txt" > "f$i.txt"
done
