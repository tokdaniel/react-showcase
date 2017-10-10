go to start: git checkout "ad7d24ed869c4db44f2d8b28e4452557b51c05f2"
go to next: git checkout $(git rev-list --topo-order HEAD.."559eab6de1eb545feb5fcf8c3ec8ab467e44b989" | tail -1)
go to previous: git checkout head~