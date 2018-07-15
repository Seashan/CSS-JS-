var maxArea = function(height) {
    var len = height.length;
    var maxAreas =0;
    var right=0;
    var left=0;
    for(var i=0;i<len-1;i++)
    {

        if(i<right&&height[i]<height[left]) /*正向查找优化*/
            continue;

        var maxHeight = 0;
        for(var j=len-1;j>i;j--){
            if(maxHeight < height[j])/*反向查找优化*/
            {
                var minHeight = Math.min(height[i],height[j]);
                var area = minHeight * (j-i);
                if(area > maxAreas){
                    maxAreas = area;
                    right=j;
                    left=i;
                }
                maxHeight = height[j];
            }

        }
    }
    return maxAreas;
};
