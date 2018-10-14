cd ..
for d in `ls` ; do
    if [ -d "$d" ]; then
        cd $d
        yarn
        echo "$d deps installed..."
        cd ..
    fi
done