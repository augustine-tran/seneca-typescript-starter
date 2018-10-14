cd ..
for d in `ls` ; do
    if [ -d "$d" ]; then
        cd $d
        echo "$d will delete '*.lock' and 'node_modules'"
        rm -rf *.lock
        rm -rf ./node_modules
        cd ..
    fi
    
done